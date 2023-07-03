export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-br from-white via-[#D3D3D3] to-[#2D3436] flex items-center justify-center h-full w-full">
      {children}
    </div>
  );
}
