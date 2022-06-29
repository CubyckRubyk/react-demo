import React from 'react';

function UserDetails({User}) {
    return (
        <div>
<h2>{User.id}</h2>
<h2>{User.name}</h2>
<h2>{User.email}</h2>
<div>{User.address.street}</div>
<div>{User.address.suite}</div>
<div>{User.address.city}</div>
<div>{User.address.zipcode}</div>
<div>{User.address.geo.lat}</div>
<div>{User.address.geo.lng}</div>
</div>
    );
}

export {UserDetails};