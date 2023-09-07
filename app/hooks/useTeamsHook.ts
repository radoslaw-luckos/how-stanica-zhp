 import {useEffect, useState} from 'react'
import { client } from '../api/client'
import { TeamBriefType } from '../utils/Types';
 
 export const useTeams = () => {
    const [teams, setTeams] = useState<TeamBriefType[]>([])

    useEffect(() => {
        const getTeams = async () => {
            const response = await client.getEntries({
                content_type: 'teams',
            });
            const data = response.items;
            
            const updatedTeams: TeamBriefType[] = [];

            data. forEach((team) => {
                const newTeam:TeamBriefType = {
                    name: team.fields.nameOfTheTeam,
                    slug: team.fields.slug,
                    age: `${team.fields.minAge} - ${team.fields.maxAge} lat`,
                    type: team.fields.type,
                    logoURL: `https:${team.fields.logo.fields.file.url}`
                }
                

                updatedTeams.push(newTeam);        

            } )

            setTeams(updatedTeams);

        }

        getTeams().catch()
    },[]);

    return {teams};
 }

