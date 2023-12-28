import Image from "next/image"

const GhazaUnderTakDocs = () => {
    return (<div className="py-20">
        <h2 className="text-orange-400 font-bold text-3xl text-center">GAZA UNDER ATTACK AND UNDER COMPLETE SIEGE!</h2>
        <p className="text-base text-center pt-8 py-3">The violence in Gaza has claimed over 20,000 lives, leaving thousands injured, according to the Palestinian Health Ministry - Inna Lillahi Wa Inna Illahi Rajioon.</p>
        <p className="text-base text-center py-3">Gaza, under complete siege, faces unthinkable horrors. The pipes supplying Gaza with water have been shut off, leaving over a million children freezing, hungry, and thirsty. Diseases are spreading, compounding the suffering. ‘Hungry, forsaken, dehumanised’ – the UNRWA Chief explains that the civilians living through these conditions feel betrayed by the world. A UN expert has issued a stark warning that hunger is pervasive among every Palestinian in Gaza.</p>
        <p className="text-base text-center py-3">Relentless airstrikes have targeted homes, mosques, and hospitals, escalating the death toll. With a ground offensive ongoing, safe places are scarce for 1.8 million displaced people.</p>
        <p className="text-base text-center py-3">Despite dangers, our teams are on the ground delivering crucial aid. We urgently appeal for your support to provide essential aid to survivors facing this deadly ordeal.</p>
        <p className="text-base text-center py-3">
            With electricity, water, food, and medical supplies all obstructed, the people of Palestine are relying on your generosity now more than ever. Stand in solidarity with Palestine and help save lives during this critical time. Please keep the people of Palestine in your duas - Jazak’Allah Khair.</p>
        {/* Donate Now */}
        <div className="flex flex-col justify-center items-center pt-10 pb-20 gap-10">
            <Image src={"/images/palestinEmergency/donate-now.png"} alt="" width={300} height={300} />
            <Image src={"/images/palestinEmergency/button.jpg"} alt="" width={700} height={900} />
        </div>
        {/* PennyAppeal */}
        <div>
            <h2 className="text-orange-500 font-bold text-3xl text-center">Penny Appeal is helping people and hospitals in Palestine</h2>
            <p className="text-base text-center pt-8 py-3">Over the past decade, Penny Appeal has worked extensively across the Palestinian territories, from Jerusalem to Gaza City, providing comprehensive humanitarian aid throughout crisis after crisis.</p>
            <p className="text-base text-center py-3">More than ever, the people of Palestine need quality medical care. Penny Appeal has long supported the Makassed Islamic Charitable Hospital in East Jerusalem, which is the largest Palestinian non-profit, non-governmental organisation.</p>
            <p className="text-base text-center py-3">Penny Appeal is on the ground working directly with this hospital in Jerusalem, as well as United Nations shelters, hospitals and medical clinics throughout Gaza, to provide much-needed critical medical aid to our sisters and brothers as and when needed.</p>
            <p className="text-sm text-gray-950 text-center py-2">PALESTINE NEEDS YOU TODAY</p>
            <div className="flex justify-center items-center py-8">
                <Image src={"/images/palestinEmergency/donate-now.png"} alt="" width={300} height={300} />
            </div>

        </div>
        {/* UN Security */}
        <div className="flex flex-col items-center gap-8">
            <h2 className="text-orange-400 font-bold text-3xl text-center max-w-5xl">UN Security Council rejects an immediate ceasefire in Gaza - Our Director of Marcomms speaks to Sky News</h2>
            <iframe width="1001" height="563" src="https://www.youtube.com/embed/XjBaT8_fzN0" title="Penny Appeal on SKY News - UN Security Council rejects an immediate ceasefire in Gaza" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>

        {/* Penny Appeal LIVE */}
        <div className="flex flex-col items-center gap-5 pt-12">
            <h2 className="text-orange-400 font-bold text-3xl text-center max-w-5xl">Penny Appeal LIVE on BBC News Distributing Emergency Aid in Gaza via Rafah Border Crossing</h2>
            <iframe width="1001" height="563" src="https://www.youtube.com/embed/Qe8Yvtnoi5k" title="Penny Appeal LIVE on BBC News - Distributing Emergency Aid in Gaza via Rafah Border" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>

        {/* Our CEO */}
        <div className="flex flex-col items-center gap-5 pt-12">
            <h2 className="text-orange-400 font-bold text-3xl text-center max-w-5xl">Our CEO speaks to BBC News from Cairo about the situation on the ground and the distribution of your aid.</h2>
            <iframe width="1001" height="563" src="https://www.youtube.com/embed/h7NxlFwhSII" title="Penny Appeal sending aid into Gaza - Our CEO, Ridwana talks to BBC News" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        {/* Our Director */}
        <div className="flex flex-col items-center gap-5 pt-12">
            <h2 className="text-orange-400 font-bold text-3xl text-center max-w-5xl">Our Director of International Network, Ray Jordan,  spoke with Sky News and emphasised the futility of humanitarian pauses and stressed the urgent need for a ceasefire.</h2>
            <iframe width="1001" height="563" src="https://www.youtube.com/embed/g_O4QNeVYOc" title="Penny Appeal on SKY News: Ceasefire Now!" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        {/*Penny Appeal UNRWA */}
        <div className="flex flex-col items-center gap-5 pt-12">
            <h2 className="text-orange-400 font-bold text-3xl text-center max-w-5xl">Penny Appeal Providing Aid at the UNRWA Khan Younis Training Centre in Gaza</h2>
            <iframe width="1001" height="563" src="https://www.youtube.com/embed/r_mHyS503Bk" title="Penny Appeal on the Ground Providing Aid at the UNRWA Khan Younis Training Centre in Gaza" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    </div>)
}
export default GhazaUnderTakDocs