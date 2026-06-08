export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container flex items-center justify-center py-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} My Company. All rights reserved.
        </p>
      </div>
    </footer>
  )
}