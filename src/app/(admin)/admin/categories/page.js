import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Image } from "lucide-react";
import { Button } from "@/components/ui/button"
import { AddCategory } from "@/components/AddCategory/AddCategory";


const categories = [
  {
    title: "Animals",
    thumbnail: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D",
    description: "All types of animals are here",
  },
  {
    title: "Sports",
    thumbnail: "https://images.unsplash.com/photo-1542319281-2a3772c20dfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnRzfGVufDB8fDB8fHww",
    description: "ALL types of sports are here",
  },
  {
    title: "Birds",
    thumbnail: "https://images.unsplash.com/photo-1508809542074-6ac268a92855?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyZHN8ZW58MHx8MHx8fDA%3D",
    description: "All types of birds are here",
  }
]

export default function Categories() {
  return (
    <div className="min-h-screen container mx-auto">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">Categories</h1>
        <AddCategory />
      </div>
       <Table>
      <TableCaption>A list of your categories.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Thumbnail</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category) => (
          <TableRow key={category.title}>
            <TableCell className="text-right">
              <Image src={category.thumbnail} style={{objectFit: "cover"}} height={40} width={40} className="rounded-md" />
            </TableCell>
            <TableCell className="font-medium">{category.title}</TableCell>
            <TableCell>{category.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
    </div>
  );
}