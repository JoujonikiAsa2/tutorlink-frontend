import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StudentForm from "./StudentForm";
import TutorForm from "./TutorForm";

const RegisterForm = () => {


  return (
    <Card className="w-full max-w-md p-4 rounded-none">
      <CardHeader className="space-y-1 p-0">
        <CardTitle className="text-xl font-bold text-primary uppercase">
          Create an account
        </CardTitle>
        <CardDescription>Choose preferred sign up method</CardDescription>
      </CardHeader>
      <Tabs defaultValue="student" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="student">Student</TabsTrigger>
          <TabsTrigger value="tutor">Tutor</TabsTrigger>
        </TabsList>
        <TabsContent value="student">
          <StudentForm/>
        </TabsContent>
        <TabsContent value="tutor">
          <TutorForm/>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default RegisterForm;
