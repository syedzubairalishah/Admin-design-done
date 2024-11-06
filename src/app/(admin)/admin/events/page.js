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

const events = [
  {
    title: "Birthday Event",
    description: "Birthday of baby boy",
    location: "Karachi",
    thumbnail: "https://unsplash.com/photos/man-on-sports-bike-exz3abIGjrA",
    date: new Date().toLocaleDateString() ,
  },
  {
    title: "Cars Event",
    description: "Worlds all cars",
    location: "Karachi",
    thumbnail: "https://unsplash.com/photos/a-group-of-people-standing-around-a-car-Lyhfo4EyMhs",
    date: new Date().toLocaleDateString() ,
  },
  {
    title: "Bikes Event",
    description: "Worlds all bikes",
    location: "Karachi",
    thumbnail: "https://unsplash.com/photos/man-on-sports-bike-exz3abIGjrA",
    date: new Date().toLocaleDateString() ,
  }
]

export default function Events() {
  return (
    <div className="min-h-screen container mx-auto">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">Events</h1>
      </div>
       <Table>
      <TableCaption>A list of your events.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Thumbnail</TableHead>
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>location</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events.map((event) => (
          <TableRow key={event.title}>
            <TableCell className="text-right">
              <Image src={event.thumbnail} height={40} width={40} className="rounded-md" />
            </TableCell>
            <TableCell className="font-medium">{event.title}</TableCell>
            <TableCell>{event.description}</TableCell>
            <TableCell>{event.location}</TableCell>
            <TableCell>{event.date}</TableCell>
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