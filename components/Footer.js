function Footer() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14
    bg-gray-900 text-gray-400"
    >
      <div className="space-y-4 text-xs text-gray-200">
        <h5 className="font-extrabold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Airbnb 2021s</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Careers</p>
      </div>

      <div className="space-y-4 text-xs text-gray-200">
        <h5 className="font-extrabold">COMMUNITY</h5>
        <p>Diversity &amp; Belonging </p>
        <p>Accessibility</p>
        <p>Frontline Stays</p>
        <p>Guest Referrals</p>
        <p>Airbnb.org</p>
      </div>

      <div className="space-y-4 text-xs text-gray-200">
        <h5 className="font-extrabold">HOST</h5>
        <p>Host your Home</p>
        <p>Host an Online Experience</p>
        <p>Responsible Hosting</p>
        <p>Resource Center</p>
        <p>Community Center</p>
      </div>

      <div className="space-y-4 text-xs text-gray-200">
        <h5 className="font-extrabold">SUPPORT</h5>
        <p>Our COVID-19 Response</p>
        <p>Help Center</p>
        <p>Cancellation options</p>
        <p>Neighbourhood Support</p>
        <p>Trust &amp; Safety </p>
      </div>
    </div>
  );
}

export default Footer;
