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
import { AddSubCategory } from "@/components/AddSubCategory/AddSubCategory";


const subcategories = [
  {
    title: "Tennis",
    category: "Sports",
    thumbnail: "https://images.unsplash.com/photo-1542319281-2a3772c20dfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnRzfGVufDB8fDB8fHww",
    description: "ALL types of sports are here",
  },
  {
    title: "Cricket",
    category: "Sports",
    thumbnail: "https://images.unsplash.com/photo-1542319281-2a3772c20dfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnRzfGVufDB8fDB8fHww",
    description: "ALL types of sports are here",
  },
  {
    title: "Cricket",
    category: "Football",
    thumbnail: "https://images.unsplash.com/photo-1542319281-2a3772c20dfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnRzfGVufDB8fDB8fHww",
    description: "ALL types of sports are here",
  },
]

export default function SubCategories() {
  return (
    <div className="min-h-screen container mx-auto">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">Sub-Categories</h1>
        <AddSubCategory />

      </div>
       <Table>
      <TableCaption>A list of your subcategories.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Thumbnail</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {subcategories.map((category) => (
          <TableRow key={category.title}>
            <TableCell className="text-right">
              <Image 
              src={category.thumbnail} 
              style={{objectFit: "cover"}} 
              height={40} width={40}
              alt="image" 
              className="rounded-md" />
            </TableCell>
            <TableCell className="font-medium">{category.category}</TableCell>
            <TableCell>{category.title}</TableCell>
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