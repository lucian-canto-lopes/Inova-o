"use client"
import '../css/SideBar.css';
import { useRef } from 'react';

interface Props {
  isCollapsed: boolean,
  children: React.ReactNode
}

function SideBar({ isCollapsed, children }: Props) {
  const sideBarRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={sideBarRef} style={{ minWidth: isCollapsed ? 0 : 300, maxWidth: isCollapsed ? 0 : 300, padding: isCollapsed ? "120px 0 0 0" : "120px 35px 0 35px" }} className='SideBar' >
      {children}
    </div>
  );
}

export default SideBar;