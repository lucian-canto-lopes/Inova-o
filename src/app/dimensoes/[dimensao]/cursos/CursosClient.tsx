'use client'

import CardDeck from "@/src/components/CardDeck"

export default function CursosClient ({
  title,
  data,
}: {
  title: string,
  data: any
}) {
  const handleCardClick = (result: any) => {
    console.log(result)
  }

  return (
    <CardDeck title={title} data={data} onCardClick={handleCardClick} />
  )
}