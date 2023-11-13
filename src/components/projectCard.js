import Image from 'next/image'

export default function ProjectCard(props){
    return (
        <div className="w-full flex flex-col border-2 border-sky-500">
            <div className="shadow-md overflow-hidden">
                <Image src={props.data.picture} width={1280} height={720} alt=""/>
            </div>
            <div className="container p-4">
                <h3 className="font-semibold text-dark text-xl">{props.data.title}</h3>
                <p className="text-sm font-bold text-sky-500">{props.data.role}</p>
                <p className="text-sm">{props.data.description}</p>
            </div>
            {/* add mt-auto at div below, to make this div at bottom of card */}
            <div className="container p-4">
                <p className="text-sm "><span className="font-bold">Tech Stack : </span> {props.data.techStack.join(", ")}.</p>
            </div>
        </div>
    )
}