"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { columns, BillboardColumn } from "./columns";
import { DataTable } from "@/components/ui/DataTable";
import { Heading } from "@/components/ui/Heading";
import { ApiList } from "@/components/ui/ApiList";

interface BillboardClientProps {
  data: BillboardColumn[];
}

export const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage billboards for your store"
        />
        <Button
          className="px-3 py-1 md:px-4 md:py-2 "
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="md:mr-2 h-5 md:h-4 w-5 md:w-4" />{" "}
          <span className="hidden md:block">Add New</span>
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="label" columns={columns} data={data} />
      <Heading title="API" description="API Calls for Billboards" />
      <Separator />
      <ApiList entityName="billboards" entityIdName="billboardId" />
    </>
  );
};
