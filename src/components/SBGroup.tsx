"use client";
import Link from "next/link";
import { useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdSubdirectoryArrowRight } from "react-icons/md";

interface Props {
  title: string,
  items: any[],
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
          if (typeof item === "string") {
            const normailizedString = item.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '')
            return <Link key={`${title}-${normailizedString}`} href={`/dimensoes/dimensoes_page/${normailizedString}`}>
              <li key={`${title}.${item}`}>{item}</li>
            </Link>
          }
          else {
            const normailizedString = item.title.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '')
            return <ul key={`${title}-${normailizedString}`} >
              <Link href={`/dimensoes/dimensoes_page/${normailizedString}`}>
                <li key={`${title}.${item.title}`}>{item.title}</li>
              </Link>
              {item.items.map((outroItem: string) => {
                const outroNormalizedString = outroItem.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '')
                return <Link key={`${title}.${item.title}.${outroItem}`} href={`/dimensoes/dimensoes_page/${normailizedString}/${outroNormalizedString}`}>
                  <li><MdSubdirectoryArrowRight />{outroItem}</li>
                </Link>
              })}
            </ul>
          }
        })}
      </ul>
    </div>
  )
}