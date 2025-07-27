import { Loader2, PlusSquare } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from 'uuid';
import GlobalApi from "../../service/GlobalApi";
import { useUser } from "@clerk/clerk-react";

function AddResume() {

    const[openDialog, setOpenDialog] = useState(false);
    const[resumeTitle, setResumeTitle] = useState();
    const {user} = useUser();
    const[loading, setLoading] = useState(false);

    const onCreate = () => {
        setLoading(true);
        const uuid = uuidv4();
        const data= {
            data: {
                Title: resumeTitle,
                ResumeID: uuid,
                Email: user?.primaryEmailAddress?.emailAddress,
                Username: user?.username
            }
        }
        GlobalApi.CreateNewResume(data).then(res => {
            console.log(res);
            if(res){
                setLoading(false);
            }
        },(error) =>{
            setLoading(false);
        })
    }
  return (
    <div>
      <div
        className="p-14 py-24 border items-center flex justify-center bg-gray-100 
    rounded-lg h-[250px] hover:scale-105 transition-all hover: shadow-md cursor-pointer border-dashed"
    onClick={() => setOpenDialog(true)}
      >
        <PlusSquare />
      </div>
      <Dialog open={openDialog}>
        <DialogContent className="bg-white shadow-xl border">
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
                <p>Add title for your new resume</p>
              <Input className='my-2' placeholder='Full Stack Resume'
              onChange={(e) => setResumeTitle(e.target.value)}/>
            </DialogDescription>

            <div className="flex justify-end gap-5">
                <Button variant='ghost' className='border' onClick={() => setOpenDialog(false)}>Cancel</Button>
                <Button disabled={!resumeTitle|| loading} 
                onClick={() => onCreate()}>
                    {loading ? 
                        <Loader2 className="animate-spin"/>: "Create"
                        
                    }
                    </Button>
                    
            </div>
            
            
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume;
