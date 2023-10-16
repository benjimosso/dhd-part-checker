import Select from 'react-select'
import { useState, useEffect } from 'react';
import { collection } from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../firebase/config";
// components
import Navbar from '../../components/Navbar'
import DeviceSelection from '../../components/DeviceSelection';

export default function Dashboard() {

  const query = collection(db, "Cisco");
  const [docs, loading, error] = useCollectionData(query);
  const [ciscoFamily, setCiscoFamily] = useState('')
  // const categories = docs?.map((docs) => (
  //   [{value: docs.name, label: docs.name}]
  // ))

  console.log(docs)


  return (
    <div>
      <Navbar />
      <label>
        <span>Cisco Product Family</span>
        <select
          onChange={(e) => setCiscoFamily(e.target.value)}
        >
          <option value="none">Select an option</option>
          {docs?.map((docs) => (
            <option key={docs.name}>{docs.name}</option>
          ))}
        </select>
      </label>
      <p>You have selected: {ciscoFamily}</p>
      {ciscoFamily && <DeviceSelection path={`Cisco/${ciscoFamily}/Children`} />}
    </div>
  )
}
