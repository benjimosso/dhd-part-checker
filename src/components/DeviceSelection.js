import { useState } from "react";
import { collection } from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from '../firebase/config';

export default function DeviceSelection({ path }) {

    const query = collection(db, path);
    const [docs, loading, error] = useCollectionData(query);
    const [selectedDevice, setSelectedDevice] = useState('')

    


    return (
        <div>
            <label>
                <span>Cisco Product Family</span>
                <select
                    onChange={(e) => setSelectedDevice(e.target.value)}
                >
                    <option value="none">Select an option</option>
                    {docs?.map((docs) => (
                        <option key={docs.name}>{docs.name}</option>

                    ))}
                </select>
            </label>
            {docs?.map((docs) => (
               docs.name === selectedDevice && 
               <div>
                <h3>name: {docs.name}</h3>
                <h4>rackmounts: {docs.rackmount}</h4>
                <h4>Power supply: 
                    {docs.powers && docs.powers.map((power, index) => (
                        <li key={index}>{power}</li>
                    ))}
                </h4>
                </div>
               
            ))}
        </div>
    )
}
