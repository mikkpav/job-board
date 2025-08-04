// declarations.d.ts or custom.d.ts
declare module '*.png' {
  import * as React from 'react';
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.png?url' {
  const url: string;
  export default url;
}
