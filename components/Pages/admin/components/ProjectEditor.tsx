import React, { useState, useEffect } from 'react';
import { supabase } from '../../../../lib/supabase';
import { Loader2, Plus, Edit2, Trash2, X, Save } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    location: string;
    year: string;
    category: string;
    description: string;
    image: string;
    stats: any[];
    gallery: string[];
}

const ProjectEditor: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [formData, setFormData] = useState<Partial<Project>>({});
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .order('id', { ascending: false });

        if (error) {
            console.error('Error fetching projects:', error);
        } else {
            setProjects(data || []);
        }
        setLoading(false);
    };

    const handleAddNew = () => {
        setEditingId(null);
        setFormData({
            title: '',
            location: '',
            year: '',
            category: '',
            description: '',
            image: '',
            stats: [],
            gallery: []
        });
        setIsFormOpen(true);
    };

    const handleEdit = (project: Project) => {
        setEditingId(project.id);
        setFormData({ ...project });
        setIsFormOpen(true);
    };

    const handleDelete = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            const { error } = await supabase.from('projects').delete().eq('id', id);
            if (error) {
                alert('Error deleting project');
            } else {
                fetchProjects();
            }
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (editingId) {
                const { error } = await supabase
                    .from('projects')
                    .update(formData)
                    .eq('id', editingId);
                if (error) throw error;
            } else {
                const { error } = await supabase
                    .from('projects')
                    .insert([formData]);
                if (error) throw error;
            }
            setIsFormOpen(false);
            fetchProjects();
        } catch (error) {
            console.error('Error saving project:', error);
            alert('Error saving project');
        } finally {
            setLoading(false);
        }
    };

    const handleStatChange = (index: number, field: 'label' | 'value', value: string) => {
        const newStats = [...(formData.stats || [])];
        if (!newStats[index]) newStats[index] = { label: '', value: '' };
        newStats[index] = { ...newStats[index], [field]: value };
        setFormData({ ...formData, stats: newStats });
    };

    const addStat = () => {
        setFormData({ ...formData, stats: [...(formData.stats || []), { label: '', value: '' }] });
    };

    const removeStat = (index: number) => {
        const newStats = [...(formData.stats || [])];
        newStats.splice(index, 1);
        setFormData({ ...formData, stats: newStats });
    };

    const handleGalleryChange = (index: number, value: string) => {
        const newGallery = [...(formData.gallery || [])];
        newGallery[index] = value;
        setFormData({ ...formData, gallery: newGallery });
    };

    const addGalleryImage = () => {
        setFormData({ ...formData, gallery: [...(formData.gallery || []), ''] });
    };

    const removeGalleryImage = (index: number) => {
        const newGallery = [...(formData.gallery || [])];
        newGallery.splice(index, 1);
        setFormData({ ...formData, gallery: newGallery });
    };

    if (loading && projects.length === 0) {
        return (
            <div className="flex justify-center py-20">
                <Loader2 className="animate-spin text-[#F58220]" size={40} />
            </div>
        );
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-semibold capitalize">Manage Projects</h2>
                {!isFormOpen && (
                    <button
                        onClick={handleAddNew}
                        className="bg-[#F58220] hover:bg-[#F58220]/90 text-white px-6 py-2 rounded-xl transition-colors font-medium flex items-center space-x-2"
                    >
                        <Plus size={20} />
                        <span>Add New</span>
                    </button>
                )}
            </div>

            {isFormOpen ? (
                <form onSubmit={handleSave} className="space-y-6 bg-black/20 p-6 rounded-2xl border border-white/5">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-medium">{editingId ? 'Edit Project' : 'Add New Project'}</h3>
                        <button type="button" onClick={() => setIsFormOpen(false)} className="text-gray-400 hover:text-white">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Title</label>
                            <input type="text" value={formData.title || ''} onChange={e => setFormData({ ...formData, title: e.target.value })} required className="w-full bg-black/50 border border-white/10 rounded-xl py-2 px-4 text-white focus:border-[#F58220]" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Category</label>
                            <input type="text" value={formData.category || ''} onChange={e => setFormData({ ...formData, category: e.target.value })} required className="w-full bg-black/50 border border-white/10 rounded-xl py-2 px-4 text-white focus:border-[#F58220]" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Location</label>
                            <input type="text" value={formData.location || ''} onChange={e => setFormData({ ...formData, location: e.target.value })} required className="w-full bg-black/50 border border-white/10 rounded-xl py-2 px-4 text-white focus:border-[#F58220]" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Year</label>
                            <input type="text" value={formData.year || ''} onChange={e => setFormData({ ...formData, year: e.target.value })} required className="w-full bg-black/50 border border-white/10 rounded-xl py-2 px-4 text-white focus:border-[#F58220]" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
                            <textarea value={formData.description || ''} onChange={e => setFormData({ ...formData, description: e.target.value })} required rows={3} className="w-full bg-black/50 border border-white/10 rounded-xl py-2 px-4 text-white focus:border-[#F58220]" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-400 mb-1">Main Image URL</label>
                            <input type="url" value={formData.image || ''} onChange={e => setFormData({ ...formData, image: e.target.value })} required className="w-full bg-black/50 border border-white/10 rounded-xl py-2 px-4 text-white focus:border-[#F58220]" />
                            {formData.image && <img src={formData.image} alt="Preview" className="mt-2 h-32 object-cover rounded-xl" />}
                        </div>
                    </div>

                    {/* Stats section */}
                    <div className="border border-white/10 p-4 rounded-xl">
                        <div className="flex justify-between items-center mb-4">
                            <label className="block text-sm font-medium text-gray-400">Project Stats (e.g. Area, Floors)</label>
                            <button type="button" onClick={addStat} className="text-[#F58220] hover:text-[#FF9B44] text-sm">+ Add Stat</button>
                        </div>
                        {formData.stats?.map((stat, index) => (
                            <div key={index} className="flex gap-4 mb-2">
                                <input type="text" placeholder="Label" value={stat.label} onChange={e => handleStatChange(index, 'label', e.target.value)} className="flex-1 bg-black/50 border border-white/10 rounded-lg py-1 px-3" />
                                <input type="text" placeholder="Value" value={stat.value} onChange={e => handleStatChange(index, 'value', e.target.value)} className="flex-1 bg-black/50 border border-white/10 rounded-lg py-1 px-3" />
                                <button type="button" onClick={() => removeStat(index)} className="text-red-500 p-2 hover:bg-red-500/10 rounded-lg"><X size={16} /></button>
                            </div>
                        ))}
                    </div>

                    {/* Gallery section */}
                    <div className="border border-white/10 p-4 rounded-xl">
                        <div className="flex justify-between items-center mb-4">
                            <label className="block text-sm font-medium text-gray-400">Gallery Images (URLs)</label>
                            <button type="button" onClick={addGalleryImage} className="text-[#F58220] hover:text-[#FF9B44] text-sm">+ Add Image</button>
                        </div>
                        {formData.gallery?.map((img, index) => (
                            <div key={index} className="flex gap-4 mb-2">
                                <input type="url" placeholder="Image URL" value={img} onChange={e => handleGalleryChange(index, e.target.value)} className="flex-1 bg-black/50 border border-white/10 rounded-lg py-1 px-3" />
                                <button type="button" onClick={() => removeGalleryImage(index)} className="text-red-500 p-2 hover:bg-red-500/10 rounded-lg"><X size={16} /></button>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-end gap-4 mt-8">
                        <button type="button" onClick={() => setIsFormOpen(false)} className="px-6 py-2 rounded-xl border border-white/10 hover:bg-white/5">
                            Cancel
                        </button>
                        <button type="submit" disabled={loading} className="px-6 py-2 rounded-xl bg-[#F58220] hover:bg-[#F58220]/90 font-medium flex items-center space-x-2">
                            <Save size={20} />
                            <span>Save Project</span>
                        </button>
                    </div>
                </form>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map(project => (
                        <div key={project.id} className="bg-black/40 rounded-2xl overflow-hidden border border-white/5 hover:border-[#F58220]/50 transition-colors group">
                            <div className="h-48 overflow-hidden relative">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <span className="text-xs font-semibold px-2 py-1 bg-[#F58220] rounded-md mb-2 inline-block shadow-lg">
                                        {project.category}
                                    </span>
                                    <h3 className="font-semibold truncate">{project.title}</h3>
                                </div>
                            </div>
                            <div className="p-4 flex items-center justify-between border-t border-white/5">
                                <span className="text-sm text-gray-400">{project.year} • {project.location}</span>
                                <div className="flex gap-2">
                                    <button onClick={() => handleEdit(project)} className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                                        <Edit2 size={16} />
                                    </button>
                                    <button onClick={() => handleDelete(project.id)} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {projects.length === 0 && (
                        <div className="col-span-full text-center py-20 text-gray-500">
                            No projects found. Add one to get started.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProjectEditor;
