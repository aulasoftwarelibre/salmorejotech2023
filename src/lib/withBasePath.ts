const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const withBasePath = (url: string): string =>
  url.startsWith('/') ? `${basePath}${url}` : url
