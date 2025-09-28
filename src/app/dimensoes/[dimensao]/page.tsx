import Link from "next/link";

export default async function DimensaoPage({
  params,
}: {
  params: Promise<{ dimensao: string }>;
}) {
  const { dimensao } = await params
  console.log(dimensao)
  return (
    <div>
      <span>
        <Link href={"/dimensoes"}>Dimensões</Link> → {dimensao}
      </span>
    </div>
  )
}