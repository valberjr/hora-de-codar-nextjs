import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Todo() {
    const router = useRouter();

    const todoId = router.query.todoId;

    return (
        <>
            <Link href="/">Voltar</Link>
            <h1>Exibindo o todo: {todoId}</h1>
            <p>
                Comentário: la la la...
                <Link href={`/todos/${todoId}/comments/1`}>
                    <a>Detalhes</a>
                </Link>
            </p>
            <p>
                Comentário: le le le...
                <Link href={`/todos/${todoId}/comments/2`}>
                    <a>Detalhes</a>
                </Link>
            </p>
            <p>
                Comentário: li li li...
                <Link href={`/todos/${todoId}/comments/3`}>
                    <a>Detalhes</a>
                </Link>
            </p>
        </>
    );
}
