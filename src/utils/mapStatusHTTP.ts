export default function mapStatusHTTP(status: string): number {
  const statusHTTPMap: Record<string, number> = {
    INVALID_DATA: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INVALID_STRING: 422,
  };
  
  return statusHTTPMap[status] ?? 500;
}