import Home from "@/components/Home/Home";
import Blogs from "@/components/OLD HACKATHON/Home/Blogs";
import Instagram from "@/components/OLD HACKATHON/Home/Instagram";
import NewArrival from "@/components/OLD HACKATHON/Home/NewArrival";
import Sofa from "@/components/OLD HACKATHON/Home/sofa";
import Table from "@/components/OLD HACKATHON/Home/table";
// import CardToast from "@/components/Toast/CartToast";
// import TopPicks from "@/components/OLD HACKATHON/Home/TopPicks";

export default function Page() {
  return (
    <>
      <div className="">
        <Sofa />
        {/* <CardToast/> */}
        <Table />
        {/* <TopPicks /> */}
        <Home/>
        <NewArrival />
        <Blogs />
        <Instagram />
      </div>
    </>
  )
}
