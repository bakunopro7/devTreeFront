import { useState } from "react";
import { social } from "../data/social";
import DevTreeInput from "../components/DevTreeInput";


function LinkTreeView() {
    const [socialLinks, setSocialLinks] = useState(social);


    return (
        <>
            <div className="space-y-5">
                {socialLinks.map(item => (
                    <DevTreeInput
                    key={item.name}
                    item={item}
                    />
                ))}
            </div>
        </>
    );
}

export default LinkTreeView;