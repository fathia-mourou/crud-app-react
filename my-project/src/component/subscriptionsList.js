import React from "react";
import { Table } from 'flowbite-react';
function SubscriptionsList() {
    return (
        <div class="mb-20 mt-20">
        <container justifyContent="center" alignItems="center">
            <Table>
                <Table.Head>
                    <Table.HeadCell> Subscription </Table.HeadCell>
                    <Table.HeadCell> Date </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">
                            Edit
                        </span>
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">
                            Delete
                        </span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Talla
                        </Table.Cell>
                        <Table.Cell>
                            01.10.2023
                        </Table.Cell>
                        <Table.Cell>
                            <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" href="/tables">
                                <p>
                                    Edit
                                </p>
                            </a>
                        </Table.Cell>
                        <Table.Cell>
                            <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" href="/tables">
                                <p>
                                    Delete
                                </p>
                            </a>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </container>
        </div>
    );
}

export default SubscriptionsList;