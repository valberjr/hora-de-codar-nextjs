import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/products">
                        <a>Produtos</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>Sobre nós</a>
                    </Link>
                </li>
            </ul>
            <h1>Hello World Next.js</h1>
        </div>
    );
}
