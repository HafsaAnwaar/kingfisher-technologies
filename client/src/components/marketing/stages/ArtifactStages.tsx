/** Signature motion stages ported from Claude artifact Ei3D8c1p → live site sections. */

export function FaqChatStage() {
  return (
    <div className="lf-mk-chat" aria-hidden="true">
      <div className="lf-mk-chat-head">
        <i className="lf-mk-chat-dot" />
        <span>Solutions desk · online</span>
      </div>
      <div className="lf-mk-chat-b lf-mk-chat-b1">Can we start with air only?</div>
      <div className="lf-mk-chat-b lf-mk-chat-b2">Yes — switch on Sea or Finance later.</div>
      <div className="lf-mk-chat-b lf-mk-chat-b3 typing">
        <i />
        <i />
        <i />
      </div>
    </div>
  )
}

export function CareersFloatPills() {
  return (
    <div className="lf-mk-career-float" aria-hidden="true">
      <span className="lf-mk-career-pill p1">Engineering</span>
      <span className="lf-mk-career-pill p2">Implementation</span>
      <span className="lf-mk-career-pill p3">You?</span>
      <span className="lf-mk-career-pill p4">Product</span>
      <span className="lf-mk-career-pill p5">Solutions</span>
    </div>
  )
}

export function SecurityPacketStage() {
  return (
    <div className="lf-mk-sec" aria-hidden="true">
      <div className="lf-mk-sec-shield">
        <span className="lf-mk-sec-wv" />
        <span className="lf-mk-sec-wv delay" />
        <span className="lf-mk-sec-wv delay2" />
        <b>Tenant</b>
      </div>
      <div className="lf-mk-sec-rail">
        <i className="lf-mk-sec-packet" />
        {['Auth', 'Roles', 'Audit', 'Encrypt', 'Backup', 'SOC'].map((label, i) => (
          <span key={label} className={`lf-mk-sec-node n${i + 1}`}>
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
