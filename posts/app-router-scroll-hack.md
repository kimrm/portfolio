---
title: "Next.js app router scroll hack"
excerpt: "Help! My app router pages automatically scrolls the header away."
date: "2024-03-17"
---

If you're using the Next.js app router and a `Layout` component that has the header, or any other component, above the rendered `{children}` in the `Layout` you may experience an issue while navigating the pages. If you scroll down on one page before navigating to another page the browser will set the focus to the start of the sub page component on that page, most likely the `<h1>` element if you have one, meaning the header will not be visible in the viewport and you have to scroll manually to the top of the page to see it.
This behavior seems to be related to Next.js scroll restoration assuming the sub page component is the "focus boundary" of the page. 

No need to say, this often leads to a bad user experience.




## The hack

A little hack to fix this is to insert a component above the header in the layout component, that upon loading automatically scrolls to the top of the page. This component runs the window.scroll function in a useEffect every time the navigation path name changes and returns an empty element.

```js

// app/components/scroll.js

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Scroll() {

  const pathname = usePathname();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return <></>;
}
```

```js

// app/layout.js

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"      
    >
      <body>
        <Scroll />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );

```

It feels like a hack, and it IS a hack. Hopefully they will change this behavior in the future, but in the meantime I'll have to stick with doing this.
