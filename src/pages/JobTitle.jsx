import React, { useState, useEffect } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import JobService from '../services/jobServices'

export default function JobTitle() {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        let jobService = new JobService()
        jobService.getJobs().then(result => setJobs(result.data.data))
    }, [])
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İd</Table.HeaderCell>
                        <Table.HeaderCell>İş Başlığı</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {
                        jobs.map(jobTitle => (
                            <Table.Row>
                                <Table.Cell>{jobTitle.id}</Table.Cell>
                                <Table.Cell>{jobTitle.jobName}</Table.Cell>

                            </Table.Row>
                        ))
                    }
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
