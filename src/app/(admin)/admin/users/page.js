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

const users = [
  {
    fullname: "zubair shah",
    email: "syedzubairalishah06@gmail.com",
    location: "karachi",
    profileimage: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww",
    events: 5,
  },
  {
    fullname: "zubair shah",
    email: "syedzubairalishah06@gmail.com",
    location: "karachi",
    profileimage: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww",
    events: 5,
  },
  {
    fullname: "zubair shah",
    email: "syedzubairalishah06@gmail.com",
    location: "karachi",
    profileimage: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww",
    events: 5,
  }
]

export default function Users() {
  return (
    <div className="min-h-screen container mx-auto">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">Users</h1>
      </div>
       <Table>
      <TableCaption>A list of users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Full Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>location</TableHead>
          <TableHead>Profile Image</TableHead>
          <TableHead>Events</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.fullname}>
            <TableCell className="text-right">
              <Image src={user.profileimage} height={40} width={40} className="rounded-md" />
            </TableCell>
            <TableCell className="font-medium">{user.fullname}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.location}</TableCell>
            <TableCell>{user.events}</TableCell>
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