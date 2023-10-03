import AddTodoForm from '@/components/addTodoForm';
import Todos from '@/components/todos';
import Image from 'next/image'
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className="container">
      <AddTodoForm />

      <Suspense fallback={<div>loading...</div>}>
        <Todos />
      </Suspense>
    </div>
  );
 }
