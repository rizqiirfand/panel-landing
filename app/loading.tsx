// app/loading.tsx
export default function GlobalLoading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="flex flex-col items-center space-y-4 animate-pulse">
        {/* Replace this with your custom spinner or skeleton */}
        <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
        <h2 className="text-xl font-semibold text-foreground">Loading...</h2>
        <p className="text-sm text-muted-foreground">Please wait while we fetch your content</p>
      </div>
    </div>
  );
}
