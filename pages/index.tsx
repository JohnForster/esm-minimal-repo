import { Delaunay } from 'd3-delaunay'

export default function Home() {
  const delaunay = Delaunay.from([[0, 0], [0, 1], [1, 0], [1, 1]])
  console.log(delaunay)
  return (
    <div>
      
    </div>
  )
}
