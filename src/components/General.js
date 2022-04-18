const General = () => {
    return ( 
        <div className="wrapperr">
        <form>
<fieldset>
 <legend>General Information</legend>
  <label>
    First Name:
    <input type="text" name="name" placeholder="Enter Your first name" /> <br /><br />

    Middle Name:
    <input type="text" name="name" placeholder="Enter Your middle name" /><br /><br />
    Last Name:
    <input type="text" name="name" placeholder="Enter Your last name" /><br /><br />
    Phone Number:&ensp;
    <input type="tel" name="tel" placeholder="Enter Your first name" /><br /><br />
    Email:&ensp;
    <input type="email" name="email" placeholder="Enter a valid email" /><br /><br />
    Sex:
    <input type="text" name="name" placeholder="Enter Your first name" /> <br /><br />
    Date Of Birth:&ensp;
    <input type="month" name="month" placeholder="Accurate DOB" /><br /><br />
    Nationality:
    <input type="text" name="name" placeholder="Country of origin" /><br /><br />
    Religion:
    <input type="text" name="text" placeholder="Religion of believe" /><br /><br />

  </label>
 
</fieldset>
</form>
      </div>
     );
}
 
export default General;