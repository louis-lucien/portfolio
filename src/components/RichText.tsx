// Renders admin-authored rich HTML (bold/italic/underline/size/lists/line breaks).
// Content is authored only through the password-protected admin, so it is
// rendered as-is. A `<div>` is used because the HTML may contain block-level
// nodes (lists, line-break divs) that are invalid inside a <p>.
export default function RichText({
  html,
  className = "",
}: {
  html: string;
  className?: string;
}) {
  return (
    <div
      className={`rich-text ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: html || "" }}
    />
  );
}
