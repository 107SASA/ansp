const CMS_URL = process.env.CMS_API_URL!;
const API_KEY = process.env.CMS_API_KEY!;
const SITE_SLUG = "anspl";

async function cmsFetch<T>(path: string, revalidate: number | false = false): Promise<T | null> {
  try {
    const res = await fetch(`${CMS_URL}/api/${SITE_SLUG}${path}`, {
      headers: { "x-api-key": API_KEY },
      next: { revalidate },
    });
    if (!res.ok) return null;
    return res.json() as Promise<T>;
  } catch {
    return null;
  }
}

export type CmsPage = {
  id: string;
  title: string;
  slug: string;
  meta: {
    title: string | null;
    description: string | null;
    og_image: string | null;
  };
  sections: Array<{
    type: string;
    label: string;
    order: number;
    fields: Record<string, string | null>;
  }>;
};

export type CmsBlog = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image: string | null;
  status: "draft" | "published";
  published_at: string | null;
  created_at: string;
  category?: string | null;
  author?: string | null;
  read_time?: number | null;
  tags?: string[] | null;
};

export type CmsBlogPost = CmsBlog & {
  content: string | null;
  meta: { title: string | null; description: string | null };
};

export function getSection(
  page: CmsPage | null,
  type: string
): Record<string, string | null> {
  return page?.sections?.find((s) => s.type === type)?.fields ?? {};
}

export async function getPage(slug: string): Promise<CmsPage | null> {
  const res = await cmsFetch<{ data: CmsPage }>(`/pages/${slug}`);
  return res?.data ?? null;
}

export async function getPages(): Promise<CmsPage[] | null> {
  const res = await cmsFetch<{ data: CmsPage[] }>("/pages");
  return res?.data ?? null;
}

export async function getBlogs(): Promise<CmsBlog[] | null> {
  const res = await cmsFetch<{ data: CmsBlog[] }>("/blogs", 60);
  return res?.data ?? null;
}

export async function getBlog(slug: string): Promise<CmsBlogPost | null> {
  const res = await cmsFetch<{ data: CmsBlogPost }>(`/blogs/${slug}`, 60);
  return res?.data ?? null;
}
