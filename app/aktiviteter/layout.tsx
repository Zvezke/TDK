export default function AktiviteterLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <header>{children}</header>;
}
