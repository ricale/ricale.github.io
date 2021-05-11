import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type TooltipProps = {
  children: React.ReactElement
  content: React.ReactNode
  delay?: number
}
const Tooltip = ({
  children,
  content,
  delay,
}: TooltipProps) => {
  const child = React.Children.only(children);
  const childRef = useRef<HTMLElement>();

  const [overed, setOvered] = useState(false);
  const onMouseEnter = useCallback(() => setOvered(true), []);
  const onMouseLeave = useCallback(() => setOvered(false), []);

  const [showContent, setShowContent] = useState<boolean>();
  useEffect(() => {
    let timeout;
    if(overed) {
      if(delay) {
        timeout = setTimeout(() => setShowContent(true), delay);
      } else {
        setShowContent(true);
      }

    } else {
      timeout && clearTimeout(timeout);
      timeout = null;
      setShowContent(false);
    }
  }, [overed, delay]);

  const contentStyle: React.CSSProperties = useMemo(() => ({
    display: showContent ? 'block' : 'none',
    position: 'absolute',
    top: '-100%',
    left: 0,
  }), [showContent]);

  const childStyle = useMemo(() => {
    const { style } = child.props;
    return ({
      ...(style || {}),
      ...(!style?.position || style.position === 'static' ? {
        position: 'relative'
      } : {}),
    })
  }, [child.props.style]);

  const childChildren = useMemo(() =>
    typeof child.props.children === 'string' ?
      [child.props.children] :
      [...child.props.children]
  , [child.props.children]);

  return (
    <>
      {React.cloneElement(
        child,
        {
          onMouseEnter,
          onMouseLeave,
          ref: childRef,
          style: childStyle
        },
        [
          ...childChildren,
          showContent === undefined ? undefined :
            <div key='tooltip-content' style={contentStyle}>
              {content}
            </div>
        ]
      )}
    </>
  );
}

export default Tooltip;
