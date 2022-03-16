import React from 'react'

const Footer=()=> {
  return (
      <footer>
          <div className='wrapper-footer'>
                <div className='upper-footer'>
                    <p>Try to win the Dyson Supersonic™ hair dryer (Prussian blue/rich copper) today! Take part in the lottery! The lucky winner will be contacted by e-mail.</p>
                </div>
                <div className='middle-footer'>
                    <div className="content-footer">
                    <h2>
                    How can I win?
                    </h2>
                    <p>Thanks to your membership, you also participate in our contest to win the Dyson Supersonic™ hair dryer (Prussian blue/rich copper). We sellect a winner among every 600 participants. The next winner will be selected on 4/15/2022, and will be notified directly by e-mail. If the reward is out of stock, the winner will receive a similar product of equal or greater value instead..</p>
                    </div>    
                    <div className="content-footer">
                    <h2>
                    No hidden fees?
                    </h2>
                    <p>We ensure that our members are provided with a detailed history of transactions, and due to this they know what they are paying for. Credit card information is only required to facilitate future purchases. There will be no charges on your credit card statement if you do not upgrade to PREMIUM membership and do not make a purchase..</p>
                    </div>    
                    <div className="content-footer">
                    <h2>
                    Why do we need your billing information?
                    </h2>
                    <p>By joining this service, you will receive a 5-day trial of our partner's program. If you continue with a subscription beyond the 5-day trial period, you will be charged an amount on your credit card which varies depending on the choice of the tariff. When your contribution is deducted from your credit card or other payment method, you will have access to these services which are reserved exclusively for members of our partner's website..</p>
                    </div>    
                </div>
                <div className='payments'>
                    <h2>We accept the following credit cards</h2>
                    <div className='cards-pay'>
                        <div className='card-img-pay'><img src="/card-01-pay.png" alt="card" /></div>
                    </div>
                </div>
          </div>
      </footer>
  )
}

export default Footer