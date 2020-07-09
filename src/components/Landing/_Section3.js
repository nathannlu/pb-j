import React, {useState, useEffect} from 'react';

export default function() {
	const [stage, setStage] = useState(0);

	return (
		<section id="section-3" className="py-40">
			<div className="container mx-auto flex flex-wrap">
				<div className="w-full md:w-2/5 pr-16">
					<div className="pb-16">
						<div className="flex items-center pb-8">
							<img src="https://emotive.io/assets/icons/icon-tin.svg" />
							<h6 
								className="pl-8" 
								style={{textTransform: 'uppercase', fontSize: '1.4rem', fontWeight: 'bold', opacity: .8}}
							>
								Testimonials	
							</h6>
						</div>
						<h2 className="pb-6">
							Our customers are the most satisfied.
						</h2>
						<p className="pb-8">
Thank you to the thousands of customers who have allowed us to be
a part of their teams and be a part of their success stories
						</p>
					</div>

					<div className="border p-8 relative rounded shadow pl-24">
						<div className="absolute" style={{left: '16px', backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDIyIDE2Ij48cGF0aCBmaWxsPSIjRjJGMUZCIiBkPSJNNS42ODcgMTZjLjYgMCAxLjE2Mi0uMDk2IDEuNjg3LS4yODdhNC43NDYgNC43NDYgMCAwMDEuMzgyLS43NyAzLjcyIDMuNzIgMCAwMC45NDgtMS4xNDdjLjIzNS0uNDQzLjM1My0uOTI2LjM1My0xLjQ0OUEzLjU4IDMuNTggMCAwMDkuOCAxMC45OWEzLjM5NiAzLjM5NiAwIDAwLS42OS0xLjA4NyAzLjIyIDMuMjIgMCAwMC0uOTk3LS43MSAyLjg2OCAyLjg2OCAwIDAwLTEuMjA1LS4yNTZjLS40MDcgMC0uNzMzLjA1LS45OC4xNWE0LjI5NCA0LjI5NCAwIDAwLS42NTguMzMzYy0uMTkzLjEyLS4zOC4yMzEtLjU2My4zMzItLjE4Mi4xLS40MTIuMTUtLjY5LjE1LS4yNTggMC0uNDgzLS4xNjUtLjY3NS0uNDk3YTIuMjcyIDIuMjcyIDAgMDEtLjI5LTEuMTYyYzAtLjc0NS4xODMtMS40Ny41NDctMi4xNzRBNy42NzggNy42NzggMCAwMTUuMDkzIDQuMDkgMTAuMTQ5IDEwLjE0OSAwIDAxNy4zMSAyLjQ3NWExMi4yNDggMTIuMjQ4IDAgMDEyLjc0Ny0xLjA4NlYwYTExLjY3IDExLjY3IDAgMDAtMy44NTYuODkgMTAuNjQyIDEwLjY0MiAwIDAwLTMuMTk3IDIuMDUzQTkuOTUzIDkuOTUzIDAgMDAuODIgNS45NDdDLjI3MyA3LjA5NCAwIDguMzUyIDAgOS43MjFjMCAuODY1LjE1IDEuNjc1LjQ1IDIuNDMuMy43NTUuNzA3IDEuNDE5IDEuMjIgMS45OTJhNS43OCA1Ljc4IDAgMDAxLjggMS4zNTlBNS4wMTggNS4wMTggMCAwMDUuNjg3IDE2em0xMS40MjkgMGMuNiAwIDEuMTY3LS4wOTYgMS43MDMtLjI4N2E0LjcgNC43IDAgMDAxLjM5OC0uNzcgMy41MiAzLjUyIDAgMDAuOTMxLTEuMTQ3Yy4yMjUtLjQ0My4zMzgtLjkyNi4zMzgtMS40NDlhMy41OCAzLjU4IDAgMDAtLjI1Ny0xLjM1OCAzLjM5NiAzLjM5NiAwIDAwLS42OTEtMS4wODcgMy4yMiAzLjIyIDAgMDAtLjk5Ni0uNzEgMi44NjggMi44NjggMCAwMC0xLjIwNS0uMjU2Yy0uNDA3IDAtLjczNC4wNS0uOTguMTUtLjI0Ny4xMDEtLjQ2LjIxMi0uNjQzLjMzMy0uMTgyLjEyLS4zNjQuMjMxLS41NDYuMzMyLS4xODIuMS0uNDEyLjE1LS42OS4xNS0uMjggMC0uNTEtLjE2NS0uNjkyLS40OTctLjE4Mi0uMzMyLS4yNzMtLjcyLS4yNzMtMS4xNjIgMC0uNzQ1LjE4Mi0xLjQ3LjU0Ni0yLjE3NGE3Ljg1NCA3Ljg1NCAwIDAxMS40NzgtMS45NzcgOS42NiA5LjY2IDAgMDEyLjIxOC0xLjYxNiAxMi43NTIgMTIuNzUyIDAgMDEyLjczLTEuMDg2VjBjLTEuMzQ5LjA4LTIuNjI5LjM3Ny0zLjgzOS44OWExMC45MTYgMTAuOTE2IDAgMDAtMy4xOTcgMi4wNTMgOS44MjMgOS44MjMgMCAwMC0yLjIwMSAzLjAwNGMtLjU0NiAxLjE0Ny0uODIgMi40MDUtLjgyIDMuNzc0YTYuNjA3IDYuNjA3IDAgMDAxLjY3MSA0LjQyMiA1Ljc4IDUuNzggMCAwMDEuOCAxLjM1OSA1LjAxOCA1LjAxOCAwIDAwMi4yMTcuNDk4eiIvPjwvc3ZnPg==")', backgroundRepeat: 'no-repeat', height: '16px', width: '21.5px'}}>
								
						</div>
						<div style={{fontSize: '1.4rem'}}>
Graaphic’s user-friendly platform allowed me to easily communicate with designers to express my needs in a logo. They replied with edits quickly and ensured I was satisfied with the design before submitting the final version to me.
						</div>
						<div className="pt-8" style={{fontSize: '1.4rem'}}>
							<div style={{fontWeight: 'bold'}}>Charles Mullany</div>
							<div>CEO of HostGenius</div>
						</div>
					</div>
				</div>
				<div className="w-full md:w-3/5">
					<img className="w-full" src="/testimonials.png" />
				</div>
			</div>
		</section>
	);
};
