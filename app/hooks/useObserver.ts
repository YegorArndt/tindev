import { useEffect, useState } from "react";
import type { RefObject } from "react";

interface Args extends IntersectionObserverInit {
  targetRef: RefObject<Element>;
  rootRef?: RefObject<Element>;
  freezeOnceVisible?: boolean;
}

export default ({
  targetRef,
  rootRef,
  threshold = 0,
  rootMargin = "0%",
  freezeOnceVisible = false,
}: Args) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]) => setEntry(entry);

  useEffect(() => {
    const node = targetRef?.current;
    const root = rootRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root: root || null, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetRef, rootRef, JSON.stringify(threshold), rootMargin, frozen]);

  return entry;
};
