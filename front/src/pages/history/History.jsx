import {React, useState, useEffect} from 'react'
import axios from 'axios'
import HistoryInd from '../../components/history/HistoryInd'


export default function History() {
	const [allHisotry, setAllHistory] = useState([])
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		const fetchHistory = async () =>{
			setLoading(true)

			try{
				const res = await axios.get('/history');
				await setAllHistory(res.data);
				await setLoading(false)
			}catch(err){
				console.log(err)
				setLoading(false)
				alert(err)
			}
		}
		fetchHistory();
	}, [])
	return (
		<>
		<div className = "container border ">
			{loading ? <h1>Please Wait While We Load...</h1> : allHisotry.map((item,index) =>(
  				<HistoryInd key={item._id} history={item} />
  				))}
		</div>
		</>
	)
}