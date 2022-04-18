const Practical = () => {
    return ( 
        <div className="wrappe">
        <form>
<fieldset>
 <legend>Practical Experience</legend>
  <label>
    Company Name:
    <input type="text" name="name" placeholder="Enter Your first name" /> <br /><br />

    Title/Position:
    <input type="text" name="name" placeholder="Enter Your middle name" /><br /><br />
    Main Task:
    <input type="text" name="name" placeholder="Enter Your last name" /><br /><br />
    Year(s) Of Experience:&ensp;
    <input type="number" name="number" placeholder="Enter Your first name" /><br /><br />
    Date Of start:&ensp;
    <input type="month" name="month" placeholder="Accurate DOB" /><br /><br />
    Referral Name:
    <input type="text" name="text" placeholder="Religion of believe" /><br /><br />
    Phone Number:&ensp;
    <input type="tel" name="tel" placeholder="Enter Your first name" /><br /><br />
  </label>
 
</fieldset>
</form>
      </div> 
     );
}
 
export default Practical;