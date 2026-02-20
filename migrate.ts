import { createClient } from '@supabase/supabase-js';
import { PROJECTS, SERVICES, TEAM } from './content';

// Setup Supabase Client
const supabaseUrl = 'https://rsxipsoyurzmzawrfkdu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzeGlwc295dXJ6bXphd3Jma2R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1ODU5MjMsImV4cCI6MjA4NzE2MTkyM30.gCSBM5Oo4NhvOOGurzIhHgPwybn1n6qjNCCDFTyOIks';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const migrate = async () => {
    console.log("Starting migration...");

    // Migrate Team
    for (const member of TEAM) {
        await supabase.from('team_members').insert([
            { name: member.name, role: member.role, image: member.image }
        ]);
        console.log(`Inserted team member: ${member.name}`);
    }

    // Migrate Projects
    for (const project of PROJECTS) {
        await supabase.from('projects').insert([
            {
                title: project.title,
                location: project.location,
                year: project.year,
                category: project.category,
                description: project.description,
                image: project.image,
                stats: project.stats,
                gallery: project.gallery
            } // We let Supabase generate the ID
        ]);
        console.log(`Inserted project: ${project.title}`);
    }

    // Migrate Services
    for (const service of SERVICES) {
        await supabase.from('services').insert([
            {
                id: service.id,
                title: service.title,
                description: service.description,
                icon: service.icon,
                image: service.image,
                details: service.details
            }
        ]);
        console.log(`Inserted service: ${service.title}`);
    }

    console.log("Migration complete.");
};

migrate();
