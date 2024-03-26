export default function page({ params }: { params: { tag: string } }) {

    return (
        <main>
            <h1 className="title hover:text-cyan-400">TAG: {params.tag}</h1>
        </main>
    );
}