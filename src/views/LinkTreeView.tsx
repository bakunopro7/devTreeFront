import { useState } from "react";
import { social } from "../data/social";
import DevTreeInput from "../components/DevTreeInput";
import { isValidUrl } from "../utils";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "../api/DevTreeAPI";


function LinkTreeView() {
    const [socialLinks, setSocialLinks] = useState(social);

    const {mutate } = useMutation({
        mutationFn: updateProfile,
        onError: () => {
            toast.error('Error updating profile');
        },
        onSuccess: () => {
            toast.success('Profile updated successfully');
        }
    });

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updaatedLinks = socialLinks.map(item => {
            if (item.name === e.target.name) {
                return {
                    ...item,
                    url: e.target.value
                }
            }
            return item;
        }
        );
        setSocialLinks(updaatedLinks);
    }

    const handlEnableLinks = (socialNetwork: string) => {
        const updatedLinks = socialLinks.map(item => {
            if (item.name === socialNetwork) {
                if(isValidUrl(item.url)) {
                    return {
                        ...item,
                        enabled: !item.enabled
                    }
                } else {
                    toast.error('Invalid URL');
                    return item;
                }
            }
            return item;
        });
        setSocialLinks(updatedLinks);
    }
    return (
        <>
            <div className="space-y-5">
                {socialLinks.map(item => (
                    <DevTreeInput
                    key={item.name}
                    item={item}
                    handleUrlChange={handleUrlChange}
                    handlEnableLinks={handlEnableLinks}
                    />
                ))}
                <button
                    onClick={() => mutate(socialLinks)}
                    className="bg-blue-500 text-white px-5 py-2 rounded-lg"
                >
                    Guardar Cambios
                </button>
            </div>
        </>
    );
}

export default LinkTreeView;