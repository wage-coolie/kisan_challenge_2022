import React from 'react'
import Users from '../../Users.json'
import Contact from '../../components/contacts/Contact'

export default function AllContacts() {
	// console.log(Users)
	return (
		<>
		<div className='container border mx-5 py-1 px-5 my-2'>
			<h1>Contacts</h1>
			<div class="row">
				{Users.map((user,i)=>(
					<>
					<Contact key={i} contact={user} />
					</>
					)
				)}
			</div>
		</div>
		</>
	)
}