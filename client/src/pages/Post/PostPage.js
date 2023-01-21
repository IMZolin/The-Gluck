import {formatISO9075} from "date-fns";
import {Link} from 'react-router-dom';
import "./postpage.css"
export default function PostPage() {
    return (
        <div className="post-page">
            <h1>Lorem ipsum dolor sit amet</h1>
            <time>{formatISO9075(new Date(2022-12-12))}</time>
            <div className="author">by @author123</div>
                <div className="edit-row">
                    <Link className="edit-btn" to={`/edit`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                        Edit this post
                    </Link>
                </div>
            <div className="image">
                <img src={`https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`} alt=""/>
            </div>
            <div className="content" >
                We need more werkin and less twerkin if you ask me. Balooby If a dog and cat had a baby together that grew up and worked a desk job he'd be a Cog in the machine For the name of an act as serious as killing someone, assassination literally translates to buttbuttination Do we make money or does money make us?

                Chezwich If Fantasy Hockey actually lived up to its name, every team would have Henrik Lundqvist and Joffrey Lupul on it We say we are walking the dog, but the dog always leads Tim Horton was a hockey player but is the name of a coffee chain, which means my dream of a goat sanctuary being my legacy is not unrealistic I think of a lot of good ideas when going to the bathroom - I guess I have a real stream of consciousness I have a moral code, but I haven't figured out how to read it yet I'm the only person in the world with my name A tagline for an airline: Take the High Road Pantone is a colour but also the singular version of pants I don't need a big house, just a two-floor condo - you could say I have lofty expectations Rumour has it targeted online advertising was developed because the internet was upset that you could read it but it couldn't read you.

                Trepidelicious This is a true fact: I never had a fear of heights until I fell off a roof If you wake up with a giant zit, you are really facing your fears when you look in the mirror Smiling could easily be misinterpreted for showing your teeth to someone because they said something that made you happy I bet most serial killers play the drums If the word kerning is kerned poorly, it kind of looks like learning - which is appropriate because both are important Are there Out-of-Stock photos? Gafuffle To Catch A Predator would have been a great name for a Steve Irwin show. Mintslavicia You know the Grammys are a joke when Future doesn't win Best Everything Logan Ipsum will loop at some point I'm in a band that does Metallica covers with our private parts - it's called Myphallica. Petrovache If you were a member of the Bloods and became paralyzed do you then become a member of the Crips? Most streets are two-way streets...why does that make love so special? If you work for an ad agency and getting paid for it aren't you the one who is being influenced by advertising?

                A tagline for a special highway that is easy to navigate while under the influence of drugs: Take the High Road I'm still upset that Tie Domi didn't name his child Tyson Thank you for using my words in your work North America should be called Russia since people are always moving so fast. Gralitica Why don't we call glasses duocles I started a sensory deprivation chamber business - it involves really dark curtains, ear plugs, and a sleeping mask Cemeteries are just garbage dumps filled with humans You should "listen to my mixtape" (check out the rest of my portfolio) Twitter is the rice of social media I have never known a Jack that was in good enough shape to name bodybuilding after him A tagline for a car company that prides itself on its morals and ethics: Take the High Road You say potatoe, I say starchy carbs Logan Broger is "amazing" and a "wonderful boy" according to Logan's mom. Felinamiss
            </div>
        </div>
    );
}
