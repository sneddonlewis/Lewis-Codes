import {lazy, Suspense} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Spinner} from "reactstrap";

const About = lazy(() => import("../../components/about/About"));
const Projects = lazy(() => import("../../components/projects/Projects"));
const Certifications = lazy(() => import("../../components/certifications/Certifications"));
const Skills = lazy(() => import("../../components/skills/Skills"));

function Body() {
	return (
		<>
			<Suspense fallback={
				<div>
					<Spinner type="grow" color="primary" />
					<Spinner type="grow" color="secondary" />
					<Spinner type="grow" color="success" />
					<Spinner type="grow" color="danger" />
					<Spinner type="grow" color="warning" />
					<Spinner type="grow" color="info" />
					<Spinner type="grow" color="light" />
					<Spinner type="grow" color="dark" />
				</div>
			}>
				<BrowserRouter>
					<Switch>
						<Route path="/projects">
							<Projects />
						</Route>
						<Route path="/certifications">
							<Certifications />
						</Route>
						<Route path="/skills">
							<Skills />
						</Route>
						<Route path="/">
							<About />
						</Route>
					</Switch>
				</BrowserRouter>
			</Suspense>
		</>
	);
}

export default Body;
