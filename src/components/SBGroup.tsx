"use client";
import Link from "next/link";
import { useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

interface Props {
  title: string,
  items: string[],
  onClick: () => void,
  isCollapsed: boolean
}

export default function SBGroup({ title, items, onClick, isCollapsed }: Props) {
  const listRef = useRef<HTMLUListElement>(null);

  return (
    <div className={`${isCollapsed ? 'SBGroup--collapsed' : ''}`}>
      <div className="SB-Title" onClick={onClick}>
        <h1>{title}</h1>
        <FaChevronDown />
      </div>
      <ul ref={listRef} style={{ height: isCollapsed ? 0 : listRef.current?.scrollHeight }}>
        {items.map(item => {
          const normailizedString = item.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '')
          return <Link key={`${title}-${normailizedString}`} href={`/dimensoes/${normailizedString}`}>
            <li key={`${title}.${item}`}>{item}</li>
          </Link>
        })}
      </ul>
    </div>
  )
}