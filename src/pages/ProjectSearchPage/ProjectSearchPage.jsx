import './ProjectSearchPage.css';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useState, useEffect} from 'react';
import { getAllProjects } from '../../utilities/api/projects/projects-api';

export default function ProjectSearchPage({user, setUser}){
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState({
        usState: '',
        zipCode: '',
        roles: [],
        date: []
    })
    const [refreshFilter, setRefreshFilter] = useState(false);

    const getProjects = async () => {
        try {
            const foundProjects = await getAllProjects();
            setProjects(foundProjects.map((project,idx) => {
                return (
                    <ProjectItem key={idx}/>
                )
            }))
        } catch (err) {
            console.error(err);
        }
    }

    const loaded = () => {
        return (
            <main>
                <SearchBar type='project' user={user} filter={filter} setFilter={setFilter} refreshFilter={refreshFilter} setRefreshFilter={setRefreshFilter}/>
                {projects}
            </main>
        )
    }

    const loading = () => {
        return
    }

    useEffect(() => {
        getProjects();
    },[refreshFilter])

    return projects.length ? loaded() : loading()
}